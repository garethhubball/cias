/**
 * Represents the options that we can pass to the Gias module
 * @public
 */
export interface ciasOPTS {

    /** Your Host Computer's IP address and websocket port no. (4444 by default) */
    OBSaddress: String;

    /** Your OBS websocket password (If it exists!) */
    OBSpassword: String,

    /** The location of your database (either localhost, or an IP address if a different server location) */
    MYSQLhost: String,

    /** MySQL Username */
    MYSQLuser: String,

    /** MySQL Password */
    MYSQLpassword: String,

    /** MySQL Database Name */
    MYSQLdatabase: String,

    /** Participants table name within your database */
    MYSQLtable: String
}