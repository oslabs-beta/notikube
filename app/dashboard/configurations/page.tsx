'use client'


import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import Switch from '@mui/material/Switch';
import {redirect} from "next/navigation"
import { Button, Label, TextInput, Select, Card } from 'flowbite-react';
import Image from 'next/image'

export default function Rules(){
    const session = useSession().data;
    const userId = session?.user?.userid;
    const [ruleModal, setRuleModal] = useState(false)
    const [rules, setRules] = useState([])
    const [alertType, setAlertType] = useState('')
    const [error, setError] = useState('')
    const [team, setTeam] = useState([])
    const [rule, setRule] = useState({
        user_id: 'b9b3b029-13ed-47e2-b9ae-4f321bd77224',
        rule_title: '',
        rule_type: '',
        rule_assign: '',
        rule_notify: '',
        rule_priority: '',
        alert_due_date: null
    })

    //get all rules associated with user's cluster_id
    async function getRules(user_id: string | undefined){
        if (user_id !== undefined){
            fetch(`/api/configurations/get-rules/${user_id}`)
                .then(res => res.json())
                .then(rules => {
                    setRules(rules)
                })
                .catch(e => console.log('getRules: failed to retrieve rules:', e))
            }
    }

    //delete a rule
    async function deleteRule(rule_id: string){
        fetch(`/api/configurations/delete-rule/${rule_id}`, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(rule => {
                console.log(rule)
            })
            .catch(e => console.log('deleteRule: failed to delete rule:', e))
    }

    //switch rule to active or not active (booleans)
    async function setActive(rule_id: string){
        fetch(`/api/configurations/set-active/${rule_id}`)
                .then(res => res.json())
                .then(active => {
                    console.log(active)
                })
                .catch(e => console.log('setActive: failed to set active:', e))
    }

    //retrieve user's team for new rule options
    async function getTeam(user_id: string | undefined){
        if (user_id !== undefined){
           fetch(`/api/configurations/get-team/${user_id}`)
            .then(res => res.json())
            .then(teamOptions => {
                setTeam(teamOptions)
            })
            .catch(e => console.log('getTeam: failed to retrieve team:', e))
        }
    }

    //create a new rule
    async function newRule(e: React.FormEvent){
      e.preventDefault()
      try{
        let res = await fetch('/api/configurations/new-rule', {
            method: "POST",
            body: JSON.stringify(rule),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        console.log('DATA RECIEVED:', data)
        if(data === 'Sorry, cluster can only have one rule per type'){
            setError('Sorry, cluster can only have one rule per type')
        }
        else if(data === 'rule successfully added'){
            setRuleModal(false)
        }
      }
      catch(e){
        console.error('newRule: error setting new rule:', e);
        }
    }

    const allRules = rules.map((rule) => {
        return <tr key={rule['rule_id']} className="text-mdodd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rule['rule_title']}</td>
            <td className="px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rule['rule_type']}</td>
            <td className="px-12 font-medium text-gray-900 whitespace-nowrap dark:text-white"><button onClick={() => {deleteRule(rule['rule_id']); getRules(userId)}}>Delete</button></td>
            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white"><Switch checked={rule['active']} onChange={() => {setActive(rule['rule_id']); getRules(userId)}} inputProps={{ 'aria-label': 'controlled' }}/></td>
        </tr>  
    })

    // form options - returns based on alert type
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


    useEffect(() => {
    getRules(userId)
  }, [userId])

    if (ruleModal){
        return(
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
                <Button className='my-2' type="submit" color='red' onClick={newRule}>Save Rule</Button>
            </form>
            </Card>
        </section>
      </div>
    </div>
        )
    }
    else{
        return(
          <div>
            <h1 className="text-left pl-8 text-5xl font-extrabold dark:text-white">Rules</h1>
            <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-10 py-3">
                    Rule 
                    </th>
                    <th scope="col" className="px-5 py-3">
                    Rule Type
                    </th>
                    <th scope="col" className="px-10 py-3 text-right">
                    Delete
                    </th>
                    <th scope="col" className="px-10 py-3 text-right">
                    Active
                    </th>
                </tr>
                </thead>
                <tbody>
                    {allRules}
                </tbody>
            </table>
            <button onClick={() => {setRuleModal(true)}}>New Rule</button>
          </div>
        )
    }
}

// TABLE FROM CONNECT CLUSTER
//{/* <tr className="text-mdodd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          //  <th
           //   scope="row"
           //   className="px-10 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          //  >
          //    {props.clusterName}
          //  </th>
          //  <td className="px-5 py-8">{props.clusterIp}</td>
          //  <td className="px-10 py-5 text-right font-semibold text-gray-900">{props.owner}
          //  </td>
          //</tr> */}
