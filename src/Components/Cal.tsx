import { useState } from 'react'


export const Cal = () => {
    const [weigth, SetWeigth] = useState<number>(0);
    const [cal,SetCal] = useState<number>(0);

    const weigthOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetWeigth(+event.target.value)
        console.log(weigth);
    }

    const calculate =()=> {
        const cal = ((weigth * 2.2 * 30 / 2)/1000).toFixed(2)
        SetCal(+cal)
    }

  return (
    <form>
      <h1>ควรดื่มน้ำวันละเท่าไหร่?</h1>
      <h3>{cal} ลิตร</h3>

      <input type="number" name='weigth' onChange={weigthOnChange} placeholder='น้ำหนักของคุณ' />
      <br />

      <button type='button' onClick={calculate}>Calculate</button>
      </form>
  )
}
