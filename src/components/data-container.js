function DataContainer ({data, name, editTools}) {
  return (
    <div className={"category " + name} data-state={name}>
      {data.map((entry, index)=>
      <div className="indexed-entry" data-index={index} key={index}>
        {values(name, index, entry, editTools)}
      </div>
    )}
    </div>
  )
}

function values(name, index, entry, editTools) {
  return (
    Object.keys(entry).map(key=>
      <div className={"value " + key} data-key={key} key={index+key}>

        {editTools.elementToEdit(name, index, key) ?
         <InputBox val={entry[key]} update={editTools.updateEditVal}/> :
         <Value val={entry[key]} noteEdit={editTools.noteEdit}/>}
      </div>
    )
  )
}

function Value ({val, noteEdit}){
  return (
    <p onClick={noteEdit}>{val}</p>
  )
}

function InputBox({val, update}){
  return (
    <input className="editing" name="" type="text" defaultValue={val} onChange={update}/>
  )
}

export default DataContainer
