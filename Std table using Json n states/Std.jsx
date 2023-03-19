import React from 'react'

const Std = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
            <tr>
                <th>StdName</th>
                <th>StdId</th>
                <th>Sec</th>
                <th>Subjects</th>
                <th>Photo</th>
                <th>Phone</th>
            </tr>
            {data.map((x)=>{
                return<tr>
                    <td>{x.stdname}</td>
                    <td>{x.stdid}</td>
                    <td>{x.sec}</td>
                    <td>
                        <ul>
                        {x.subjects.map((x)=>{
                            return<li>{x}</li>
                        })} </ul></td>
                    <td>
                        <img src={x.photo} alt="" style={{height:"50px", width:"50px"}}></img></td>
                        <td>
                            <ul>
                                {x.phone.map((x)=>{
                                    return<li>{x}</li>
                                })}
                            </ul>
                        </td>
                </tr>
            })}
        </table>
    </div>
  )
}

export default Std