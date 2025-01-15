"use client";
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import React from 'react'

function SaveBtn() {
  return (
    <div>
      <Button 
        variant={"outline"} 
        className='flex items-center gap-2'
        onClick={()=> {
            alert("TODO");
        }}
        >
            <CheckIcon size={16} className='stroke-green-400'/>
            Save
        </Button>
    </div>
  )
}

export default SaveBtn
