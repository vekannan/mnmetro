import React from 'react'
const selectBox = props => {
    const {
        datas,
        changeAction,
        val,
        label,
        defaultText
    } = props;
    return(<div>
    {datas && datas.length !== 0 && <select className="selectbox" onChange={changeAction}>
        <option key='' value=''>{defaultText}</option>
        { datas.map(data => {
            return <option key={data[`${val}`]} value={data[`${val}`]}>{data[`${label}`]}</option>
        })}
    </select>}</div>)
}

export default selectBox;