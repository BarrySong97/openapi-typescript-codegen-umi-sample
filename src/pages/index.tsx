import { PetService } from '@/api/pet';
import { useRequest } from 'ahooks';
import React from 'react';
export default function IndexPage() {
  const { data, error, loading } = useRequest(() => PetService.getPetById(11));
  console.log(data);
  
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data?.name}</div>;
}
