/**
 * Created by PIGNOL on 07/06/2015.
 */
function Character(options){

    if (!options){
        options=[]
    }

    this.position = options.position || {x:0,y:0} ;
    this.vitesse = options.vitesse || 0 ;
    this.inGame=options.inGame || false ;
    this.hasDynamite =options.hasDynamite || true;
    this.images = options.images || {};
    this.bonus = options.bonus || {};


}