'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import SetRule from '../../_components/configurations/page';
import Switch from '@mui/material/Switch';


export default function Rules(){
    const session = useSession().data;
    const userId = session?.user?.userid;
    const [ruleModal, setRuleModal] = useState(false)
    const [rules, setRules] = useState([])

    //get all rules associated with user's cluster_id
    async function getRules(user_id: string | undefined){
        if (user_id !== undefined){
            fetch(`http://localhost:3000/api/configurations/get-rules/${user_id}`)
                .then(res => res.json())
                .then(rules => {
                    setRules(rules)
                })
                .catch(e => console.log('getRules: failed to retrieve rules:', e))
            }
    }

    //delete a rule
    async function deleteRule(rule_id: string){
        fetch(`http://localhost:3000/api/configurations/delete-rule/${rule_id}`, {
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
        fetch(`http://localhost:3000/api/configurations/set-active/${rule_id}`)
                .then(res => res.json())
                .then(active => {
                    console.log(active)
                })
                .catch(e => console.log('setActive: failed to set active:', e))
    }

    useEffect(() => {
        getRules(userId)
    }, [userId])

    if (ruleModal){
        return(
            <div>
                <SetRule />
            </div>
        )
    }
    else{
        const allRules = rules.map((rule) => {
            return <tr key={rule['rule_id']} className="text-mdodd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rule['rule_title']}</td>
                <td className="px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rule['rule_type']}</td>
                <td className="px-12 font-medium text-gray-900 whitespace-nowrap dark:text-white"><button onClick={() => {deleteRule(rule['rule_id']); getRules(userId)}}>Delete</button></td>
                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white"><Switch checked={rule['active']} onChange={() => {setActive(rule['rule_id']); getRules(userId)}} inputProps={{ 'aria-label': 'controlled' }}/></td>
            </tr>  
        })
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
    
                {/* Table Body Rendered with Users Corresponding Clusters */}
                <tbody>
                {allRules}
                </tbody>
            </table>
            <button onClick={() => {setRuleModal(true)}}>New Rule</button>
          </div>
        )
    }
}

{/* <tr className="text-mdodd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-10 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {props.clusterName}
            </th>
            <td className="px-5 py-8">{props.clusterIp}</td>
            <td className="px-10 py-5 text-right font-semibold text-gray-900">{props.owner}
            </td>
          </tr> */}
