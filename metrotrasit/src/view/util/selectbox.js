import React from 'react'
const selectBox = props => {
    const {
        datas,
        changeAction,
        val,
        label
    } = props;
    return(<div>
    {datas && datas.length !== 0 && <select className="selectbox" onChange={changeAction}>
        <option value=''>Select direction</option>
        { datas.map(data => <option key={data[`${val}`]} value={data[`${val}`]}>{data[`${label}`]}</option>)}
    </select>}</div>)
}

export default selectBox;