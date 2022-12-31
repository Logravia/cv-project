function createDataContainer(data,name, editStatus={}) {
  return (
    <div className={"category " + name} data-state={name}>
      {data.map((entry, i)=>
      <div className="indexed-entry" data-index={i} key={i}>
        {values(name, entry, i, editStatus)}
      </div>
    )}
    </div>
  )
}

function values(name, entry, index, editStatus){
  return (
    Object.keys(entry).map(key=>
      <div className={"value " + key} data-key={key} key={index+key}>
        {elementToEdit(editStatus, name, index, key) ?
         <p>EDITING</p> : <p>{entry[key]}</p>
        }
      </div>
    )
  )
}

function elementToEdit(editStatus, name, index, key){
  return (editStatus.key === key && editStatus.state === name && editStatus.index === index)
}
export default createDataContainer;
