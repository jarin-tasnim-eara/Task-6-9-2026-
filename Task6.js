let a=[
    { name: "Eara", group:1 },
    { name: "Jarin", group:2 },
    { name: "Tasnim", group:1 },
    ]
function groupBy(users){



 let grouped ={};

 for( let i=0; i<users.length;i++ ){
    let j= users[i].group;
    if(!grouped[j]){
        grouped[j]=[];
    }
    grouped[j].push(users[i]);
 }
return grouped;
 }

console.log(groupBy(a));

