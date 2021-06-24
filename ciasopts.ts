interface ciasOPTS {
    OBSaddress: String; //Your Host Computer's IP address and websocket port no. (4444 by default)
    OBSpassword: String, // Your OBS websocket password (If it exists!)
    MYSQLhost: String, // The location of your database (either localhost, or an IP address if a different server location)
    MYSQLuser: String, // MySQL Username
    MYSQLpassword: String, // MySQL Password
    MYSQLdatabase: String, // MySQL Database Name
    MYSQLtable: String // Participants table name within your database
}