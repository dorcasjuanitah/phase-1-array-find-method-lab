//let superbowlWin = array =>{
  //  return array.result ==="W";
  //}
function superbowlWin(record){
    return record.result === "W";
}


  let findWin = record.find(superbowlWin);
  console.log(findWin);