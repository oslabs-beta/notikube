'use client'

import React from 'react'
import { ProgressCircle, Card, Flex } from "@tremor/react";

export default function NodeCircle({ name, value }: { name: string, value: number }) {
  return (
    <div className="my-3 pr-10">
      <Card className="max-w-sm mx-auto" decoration="top" decorationColor="red">
        <p className="p-2 text-slate-500 text-sm text-center font-mono">{name}</p>
        <Flex className="space-x-5" justifyContent="center">
          <ProgressCircle
            showAnimation={true}
            value={value}
            radius={60}
            strokeWidth={10}
            color={'red'}
          >
            <span className="text-xs text-gray-700 font-medium">{value.toFixed(2)}%</span>
          </ProgressCircle>
        </Flex>
      </Card>
    </div>
  )
}
