import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Reviews() {
  const { productId } = useParams();

  return(
    <div>
      <p>Отзывы к товару {productId}</p>
    </div>
  )
}