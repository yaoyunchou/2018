class Content{
    constructor(){

    }
    setUser(user){
        this.user = user;
    }
    getUser(){
        return this.user;
    }
    getUserId(){
        return this.user._id;
    }
}

module.exports = new Content();