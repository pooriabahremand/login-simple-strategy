/* eslint-disable no-console */
import { promises as fs } from 'fs';
import Product from '../lib/type';
import CardClient from './CardClient';

export default async function Card() {
  const file = await fs.readFile(`${process.cwd()}/public/products.json`, 'utf8');
  const data: Product[] = JSON.parse(file as unknown as string);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {data.map((card: Product, index: number) => (
        <div key={index}>
          <h4>name : {card.name}</h4>
          <p>color : {card.color}</p>
          <p>brand : {card.brand}</p>
          <p>Price : {card.price}</p>
          <CardClient />
        </div>
      ))}
    </div>
  );
}
