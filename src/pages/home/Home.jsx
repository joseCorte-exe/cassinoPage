import React from 'react';

import Card from '../../components/card/Card';
import CardBig from '../../components/card/CardBig';

import Left from '../../assets/arrow_left.png';
import Right from '../../assets/arrow_right.png';

import { HomeView } from './style'

export default function Home() {
  return (
      <HomeView>
          <aside className='arrow'>
            <img src={Left} alt="button" />
          </aside>
          <main>
            <article>
              <CardBig />
            </article>
            <article>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </article>
          </main>
          <aside className='arrow'>
              <img src={Right} alt='' />
          </aside>
      </HomeView>
  );
}
