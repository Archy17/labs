var user = {
  type    : 'Adm',
  data    : [
    { userName : 'Eric', id : 'a01' },
    { userName : 'Douglas', id : 'a02' },
    { userName : 'John', id : 'a03' }
  ],
  handler : function() {
    var allUsersTypeAndId = [];
    this
      .data
      .forEach( function( person ) {
        console.log(this);
        allUsersTypeAndId.push( person.id + this.type );
      });

    return allUsersTypeAndId;
  }
};

console.log( user.handler() );
