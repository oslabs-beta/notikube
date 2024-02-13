'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { Button, Label, TextInput, Select, Card } from 'flowbite-react';
import Image from 'next/image'
import {redirect} from "next/navigation"
import { Alert } from 'flowbite-react';


export default function SetRule() {
    const session = useSession().data;
    const userId = session?.user?.userid;
    const [alertType, setAlertType] = useState('')
    const [error, setError] = useState('')
    const [team, setTeam] = useState([])
    const [rule, setRule] = useState({
        user_id: userId,
        rule_title: '',
        rule_type: '',
        rule_assign: '',
        rule_notify: '',
        rule_priority: '',
        alert_due_date: null
    })

    async function getTeam(user_id: string | undefined){
        if (user_id !== undefined){
           fetch(`http://localhost:3000/api/configurations/get-team/${user_id}`)
            .then(res => res.json())
            .then(teamOptions => {
                setTeam(teamOptions)
            })
            .catch(e => console.log('getTeam: failed to retrieve team:', e))
        }
    }

    async function newRule(){
        fetch('http://localhost:3000/api/configurations/new-rule', {
            method: 'POST',
            body: JSON.stringify(rule)
        })
        .then(res => res.json())
        .then(res => {
            console.log('new rule response', res.message)
            if(res.message === 'Sorry, cluster can only have one rule per type'){
                setError('Sorry, cluster can only have one rule per type')
            }
            if(res.message === 'rule successfully added'){
                redirect('/dashboard/configurations')
            }
        })
        .catch(e => {
            console.log('newRule: error setting new rule:', e)
        })
    }

    function NextFormOptions({alertType} : { alertType: string}){
        const teamOptions = team.map((member, index) => {
            return <option key={member['name']} value={member['email']}>{member['name']}</option>
        })
        switch(alertType){
            case 'Assign By Severity':
                return(
                    <>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alert_severity" value="Which Severity?" />
                        </div>
                        <Select 
                            id="alert_severity" 
                            value={rule.rule_priority}
                            onChange={e => {
                            setRule({
                                ...rule,
                                rule_priority: e.target.value
                                }) 
                            }}
                            required shadow >
                            <option value='critical'>Critical</option>
                            <option value='warning'>Warning</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alert_assign" value="Who do you want to assign it to?" />
                        </div>
                        <Select 
                            id="alert_assign" 
                            value={rule.rule_assign}
                            onChange={e => {
                            setRule({
                                ...rule,
                                rule_assign: e.target.value
                                }) 
                            }}
                            required shadow >
                            {teamOptions}
                        </Select>
                    </div>
                </>
                );
            case 'Notify By Severity':
                return(
                    <>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alert_severity" value="Which Severity?" />
                        </div>
                        <Select 
                            id="alert_severity" 
                            value={rule.rule_priority}
                            onChange={e => {
                            setRule({
                                ...rule,
                                rule_priority: e.target.value
                                }) 
                            }}
                            required shadow >
                            <option value='critical'>Critical</option>
                            <option value='warning'>Warning</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alert_notify" value="Who do you want to notify by email?" />
                        </div>
                        <Select 
                            id="alert_notify" 
                            value={rule.rule_notify}
                            onChange={e => {
                            setRule({
                                ...rule,
                                rule_notify: e.target.value
                                }) 
                            }}
                            required shadow >
                            {teamOptions}
                        </Select>
                    </div>
                    </>
                );
            default:
                return(
                    <div>
    
                    </div>
                )
        }
    }

  useEffect(() => {
    getTeam(userId)
  }, [userId])

  return (
    <div>
      <h1 className="text-left pl-8 text-5xl font-extrabold dark:text-white">Rules</h1>
      <div className='flex justify-center'>
        <section className="h-screen flex flex-col items-center">
            <Card className='justify-items-center'>
            <div className='flex flex-col items-center'>
                <Image
                    src="/assets/logo.svg"
                    className="h-32"
                    alt="NotiKube Logo"
                    width={150}
                    height={150}
                />
            <p className="text-xl max-w-80 text-center text-wrap italic antialiased font-semibold py-4 text-red-600 " >When an alert comes in, I want NotiKube to automatically...</p>            </div>
            <form className="flex max-w-md flex-col justify-center gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="alert_title" value="What do you want to call this rule?" />
                    </div>
                    <TextInput 
                        id="alert_title" 
                        value={rule.rule_title} 
                        onChange={e => {
                        setRule({
                        ...rule,
                        rule_title: e.target.value
                        })
                        }} 
                        required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="alert_type" value="Select your rule type" />
                    </div>
                    <Select 
                        id="alert_type"
                        value={rule.rule_type} 
                        onChange={e => {
                        setRule({
                            ...rule,
                            rule_type: e.target.value
                            }) 
                        setAlertType(e.target.value)
                        }}
                        required shadow >
                        <option value=''></option>
                        <option value='Assign By Severity'>Auto Assign By Severity</option>
                        <option value='Notify By Severity'>Notify By Severity</option>
                    </Select>
                </div>
                <NextFormOptions alertType={alertType}/>
                <p className='text-red-700'>{error}</p>
                <Button className='my-2' type="submit" color='red' onClick={() => {newRule()}}>Save Rule</Button>
            </form>
            </Card>
        </section>
      </div>
    </div>
  );
}
//<p className="text-xl italic antialiased font-semibold py-4 text-red-600 " >When an alert comes in, I want NotiKube to automatically...</p>