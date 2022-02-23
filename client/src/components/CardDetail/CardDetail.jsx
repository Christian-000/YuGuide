import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCardById } from '../../actions';

export default function CardDetail() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const myCard = useSelector(state => state.cards)
  
  useEffect(()=>{
    dispatch(getCardById(id))
  },[dispatch, id]);

  return (
    <div>{myCard[0].name}</div>
  )
}
