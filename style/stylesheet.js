import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    mainContainer: {
        flex:1,
         alignContent: 'center',
         textAlign: 'center'
       },
    head:{
        fontSize:30,
        color:'#ADD8E6',
        marginTop:50,
        marginBottom:50,
       },
    CountryCities: {
        
        marginBottom:10,
        marginTop:10,
        alignItems: 'center',
       padding:20,
       backgroundColor: '#34A56F',
       borderWidth: 1,
       height: 60,
      width: '150%',
      alignItems: 'center',
      borderRadius: 10,
      },
      separator:{
        height:1,
        backgroundColor:'grey',
        marginHorizontal:10
      },
      Country:{
        color:'red',
        fontSize: 20,
        marginBottom:10,
        alignItems:'center'

      },
      City:{
        color:'blue',
        fontSize: 20,
        marginBottom:20,
        alignItems:'center'

      },
      detailsCC:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        padding:20,


      },
      btnContainer:{
        justifyContent:'flex-end',
        padding:20,
        margin:10
      },
      homeBtn:{
        backgroundColor: 'green',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: 'green',
        height: 40,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
      }
})