(function(){
  'use strict';

  angular
    .module( 'dragDrop' )
    .directive( 'droppable', droppable );

  function droppable() {
    return {
      scope  : {
        drop : '&', // parent
        bin  : '='  // bi-directional scope
      },
      link  : function( scope, element ) {
        // we need the native object
        var el = element[ 0 ];

        el.addEventListener( 'dragover', function( e ) {
          console.log( 'dragover' );
          e.dataTransfer.dropEffect = 'move';
          // allow to drop
          if ( e.preventDefault ) e.preventDefault();
          this.classList.add( 'over' );
          return false;
        }, false );

        el.addEventListener( 'dragenter', function( e ) {
          console.log( 'dragenter' );
          this.classList.add( 'over' );
        }, false );

        el.addEventListener( 'dragleave', function( e ) {
          console.log( 'dragleave' );
          this.classList.remove( 'over' );
        }, false );

        el.addEventListener( 'drop', function( e ) {
          console.log( 'drop' );
          // Stops some browsers from redirecting
          if ( e.stopPropagation ) e.stopPropagation();

          this.classList.remove( 'over' );

          var item = document.getElementById( e.dataTransfer.getData( 'Text' ) );
          this.appendChild( item );

          // call the drop passed drop function
          scope.$apply( function( scope ) {
            var fn = scope.drop();
            if ( 'undefined' !== typeof fn ) {
              fn( item.id, bind.Id );
            }
          });

          return false;
        }, false );
      }
    }
  }
}());