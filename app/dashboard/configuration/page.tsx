'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { Button, Label, TextInput, Select } from 'flowbite-react';
import Image from 'next/image'


export default function Configuration() {
    const session = useSession().data;
    const userId = session?.user?.userid;
    const [alertType, setAlertType] = useState('')
    const [team, setTeam] = useState('')
    const [rule, setRule] = useState({
        user_id: userId,
        alert_title: '',
        alert_type: '',
        alert_assign: '',
        alert_notify: '',
        alert_severity: '',
        alert_due_date: null
    })

    function getTeam(user_id: string){
        fetch(`http://localhost:3000/api/configuration/${user_id}`)
            .then((res) => res.json())
            .then((teamOptions) => setTeam(teamOptions))
            .catch((e) => console.log('getTeam: failed to retrieve team:', e))
    }

    function NextFormOptions({alertType} : { alertType: string}){
        switch(alertType){
            case 'Assign By Severity':
                return(
                    <>
                    <div className=''>
                        <div className="mb-2 block">
                            <Label htmlFor="alert_severity" value="Which Severity?" />
                        </div>
                        <Select 
                            id="alert_severity" 
                            value={rule.alert_severity}
                            onChange={e => {
                            setRule({
                                ...rule,
                                alert_severity: e.target.value
                                }) 
                            }}
                            required shadow >
                            <option value='Critical'>Critical</option>
                            <option value='Warning'>Warning</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alert_assign" value="Who do you want to assign it to?" />
                        </div>
                        <Select 
                            id="alert_assign" 
                            value={rule.alert_assign}
                            onChange={e => {
                            setRule({
                                ...rule,
                                alert_assign: e.target.value
                                }) 
                            }}
                            required shadow >
                            <option value='Derek Coughlan'>Derek Coughlan</option>
                            <option value='Jesse Chou'>Jesse Chou</option>
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
                            value={rule.alert_severity}
                            onChange={e => {
                            setRule({
                                ...rule,
                                alert_severity: e.target.value
                                }) 
                            }}
                            required shadow >
                            <option value='Critical'>Critical</option>
                            <option value='Warning'>Warning</option>
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
  }, [])

  return (
    <div>
      <h1 className="text-left pl-8 text-5xl font-extrabold dark:text-white">Configuration</h1>
      <div className='flex justify-center'>
        <section className="h-screen flex flex-col items-center">
            <div className='flex flex-col items-center'>
                <Image
                    src="/assets/logo.svg"
                    className="h-32"
                    alt="NotiKube Logo"
                    width={150}
                    height={150}
                />
                <p className="text-xl italic antialiased font-semibold py-4 text-red-600 " >When an alert comes in, I want NotiKube to automatically...</p>
            </div>
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="alert_title" value="What do you want to call this rule?" />
                    </div>
                    <TextInput 
                        id="alert_title" 
                        value={rule.alert_title} 
                        onChange={e => {
                        setRule({
                        ...rule,
                        alert_title: e.target.value
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
                        value={rule.alert_type} 
                        onChange={e => {
                        setRule({
                            ...rule,
                            alert_type: e.target.value
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
                <Button className='my-2' type="submit" color='red'>Save Rule</Button>
            </form>
        </section>
      </div>
    </div>
  );
}