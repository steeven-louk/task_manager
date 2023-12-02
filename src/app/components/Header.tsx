import React from 'react'
import moment from 'moment';
import 'moment/locale/pt-br';

const Header = () => {
    moment.locale('fr');

    let time = moment().format('[today] dddd')
  return (
    <header>
        <div className="head w-full ">
            <div className="date justify-between flex align-baseline">
                <span className='font-extrabold'>{time}</span>
                <div className="user inline-flex gap-3">
                    <span>name</span>
                </div>
            </div>
            <div className="card shadow-lg rounded-md p-4">
                <h2>Welcome back to your</h2>
                <h1 className='text-4xl font-bold mt-3'>Daily task manager</h1>
            </div>
        </div>
    </header>
  )
}

export default Header