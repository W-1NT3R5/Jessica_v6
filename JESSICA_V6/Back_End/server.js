const server = require('ws').Server;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const s  = new server({port:8080});
console.time("Recieved_at");
console.time("Sent_at");
const time = new Date();
const exec = require("child_process").execFile;
const fetch  = require("node-fetch")


function clear(){
    process.stdout.write('\033c');
};
function banner(){
    console.log("\x1b[1m\x1b[35m");
    console.log("     ██╗███████╗███████╗███████╗██╗ ██████╗ █████╗");
    console.log("     ██║██╔════╝██╔════╝██╔════╝██║██╔════╝██╔══██╗");
    console.log("     ██║█████╗  ███████╗███████╗██║██║     ███████║");
    console.log("██   ██║██╔══╝  ╚════██║╚════██║██║██║     ██╔══██║");
    console.log("╚█████╔╝███████╗███████║███████║██║╚██████╗██║  ██║");
    console.log(" ╚════╝ ╚══════╝╚══════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝");
    console.log("\x1b[0m");
};
function status(){
    if(s){
        console.log("\x1b[1m\x1b[36m","{Developer    :","\x1b[0m","\x1b[1m\x1b[32m","   [Arun]}","\x1b[0m");
        console.log("\x1b[1m\x1b[36m","{Server_stats :","\x1b[0m","\x1b[1m\x1b[32m","   [Up and running]}","\x1b[0m");
        console.log("\x1b[1m\x1b[36m","{Server_Type  :","\x1b[0m","\x1b[1m\x1b[32m","   [Node_Server]}","\x1b[0m");
        console.log("\x1b[1m\x1b[36m","{Domain       :","\x1b[0m","\x1b[1m\x1b[32m","   [localhost]}","\x1b[0m");
        console.log("\x1b[1m\x1b[36m","{Port         :","\x1b[0m","\x1b[1m\x1b[32m","   [8080]}","\x1b[0m");
        console.log("\x1b[1m\x1b[36m","{Logging on   :","\x1b[0m","\x1b[1m\x1b[32m",`   [${time.getDate()}/${time.getDay()}/${time.getFullYear()}]}`,"\x1b[0m");
        console.log(" ");
    }
    else{
        console.log("\x1b[1m\x1b[31m","Error in Starting The Server");
    };
};

clear();
banner();
status();

//MAIN
s.on("connection",(ws)=>{
    ws.on("message",async (msg)=>{
        console.log("\x1b[1m\x1b[35m","Received :","\x1b[0m","\x1b[1m\x1b[36m",msg,"\x1b[0m");console.timeLog("Recieved_at");
        //commands
        try{
            let low = msg.toLowerCase();
            //paint
            if(low.split(" ").includes("open",0) && low.split(" ").includes("paint",1) ){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Opening paint","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Opening paint");
                exec("paint.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
                ws.send("Sir paint is now open");
            }
            //notepad
            else if(low.split(" ").includes("open",0) && low.split(" ").includes("notepad",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Opening notepad","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Opening notepad");
                exec("notepad.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
                ws.send("Sir notepad is now ready to use");
            }
            //calculator
            else if(low.split(" ").includes("open",0) && low.split(" ").includes("calculator",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Opening calculator","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Opening calculator");
                exec("calculator.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
                ws.send("Sir calculator is now ready to calculate");
            }
            //Audio

            //Avicii the nights
            else if(low.split(" ").includes("play",0) && low.split(" ").includes("night",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Playing nights","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Playing nights");
                ws.send("I've triggered the audio system sir enjoy");
                exec("nights_aud.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
            }
            //Dominic strike heart beat
            else if(low.split(" ").includes("play",0) && low.split(" ").includes("strike",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Playing strike","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Playing strike");
                ws.send("I've triggered the audio system sir enjoy");
                exec("strike_aud.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
            }
            //Valesco - Cloud 9
            else if(low.split(" ").includes("play",0) && low.split(" ").includes("cloud",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Playing cloud","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Playing cloud");
                ws.send("I've triggered the audio system sir enjoy");
                exec("cloud_aud.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
            }
            //san holo we rise
            else if(low.split(" ").includes("play",0) && low.split(" ").includes("me",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","Playing me","\x1b[0m");console.timeLog("Sent_at");
                ws.send("Playing me");
                ws.send("We rise we fall");
                exec("rise_aud.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
            }

            //Play gta sanandreas
            else if(low.split(" ").includes("game",0) && low.split(" ").includes("gta",1)){
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m","starting gta sanandreas","\x1b[0m");console.timeLog("Sent_at");
                ws.send("starting gta sanandreas");
                ws.send("Have a good time sir");
                exec("gta_sa.bat",(err,stdout)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(stdout);
                });
            }
            //Auto talk
            else{
                let xhr = new XMLHttpRequest();
                xhr.open("GET",`http://api.brainshop.ai/get?bid=157075&key=QEhCwUj9ybXafjnI&uid=[ARUN_360]&msg=[${msg}]`,false);
                xhr.send();
                let res = await JSON.parse(xhr.responseText);
                ws.send(res.cnt);
                console.log("\x1b[1m\x1b[35m","Sent :","\x1b[0m","\x1b[1m\x1b[32m",res.cnt,"\x1b[0m");console.timeLog("Sent_at");
                console.log(" ");
            };

        }
        catch(error){
            console.log(error);
        };
    });
});