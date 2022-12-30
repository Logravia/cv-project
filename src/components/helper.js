function createDataContainer(data,name) {
  return (
    <div className={"state-container " + name} data-state={name}>
      {data.map((entry, i)=>
      <div className="individual-entry-container" data-index={i}>
        {propertiesValues(entry)}
      </div>
    )}
    </div>
  )
}

function propertiesValues(entry){
  return (
    Object.keys(entry).map(key=>
      <div className="value-container" data-key={key}>
        <p>{entry[key]}</p>
      </div>
    )
  )
}
export default createDataContainer;
