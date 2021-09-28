import React from 'react';
import { Text, View } from 'react-native';

export default function App()
{


    //основание
    var a = 10;
    //высота
    var h = 12;
    //площадь
    var s=1/2*(a*h);

    return (
        <View style = {{backgroundColor: '#5D4BD8', width: '100%', height: '100%'}}>

        <View style = {{backgroundColor: '#616161'}}>
        <Text style = {{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign:'center', paddingTop: 40, paddingBottom: 20, fontSize: 30}}>Площадь произвольного треугольника</Text>
        </View>

        <View style = {{backgroundColor: '#E0E0E0', width: '100%', height: '100%'}}>
        <Text style = {{fontWeight: 'bold', color: '#000', paddingTop: 50, paddingBottom: 30, marginLeft: 15, fontSize: 18}}>Формула: S=1/2(a*h)</Text>
        <Text style = {{fontWeight: 'bold', color: '#000', paddingTop: 50, paddingBottom: 30, marginLeft: 15, fontSize: 18}}>Основание: {a}</Text>
        <Text style = {{fontWeight: 'bold', color: '#000', paddingTop: 10, paddingBottom: 30, marginLeft: 15, fontSize: 18}}>Высота: {h}</Text>
        <Text style = {{fontWeight: 'bold', color: '#000', paddingTop: 10, paddingBottom: 30, marginLeft: 15, fontSize: 18}}>Площадь: {s}</Text>


        </View>

        </View>

        );


};


