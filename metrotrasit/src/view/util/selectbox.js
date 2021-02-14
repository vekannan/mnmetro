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
        <option key='' value=''>Select direction</option>
        { datas.map(data => {
            if(data[`${val}`] && data[`${label}`])
                return <option key={data[`${val}`]} value={data[`${val}`]}>{data[`${label}`]}</option>
        })}
    </select>}</div>)
}

export default selectBox;