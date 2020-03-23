import React from 'react';

import {
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text
} from 'react-native'

import map from '../assets/mapabrasil.png'
import blocked from '../assets/trava.png'
import unblocked from '../assets/unlocked.png'

import fortalezaImage from '../assets/fortaleza.jpg'
import { Actions } from 'react-native-router-flux';

function Menu() {
    function questaoCeara() {
        Actions.questaoCeara();
    }

    function questaoSaoPaulo() {
        Actions.questaoSaoPaulo();
    }

    function questaoCuritiba() {
        Actions.questaoCuritiba();
    }

    return (
        <ImageBackground source={map} style={styles.container}>
            <TouchableOpacity onPress={() => questaoCeara()} style={[styles.buttonCe]}>
                <Image source={unblocked} height={10} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonSp]} onPress={() => questaoSaoPaulo()}>
                <Image source={blocked} height={10}  />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonPr]} onPress={() => questaoCuritiba()}>
                <Image source={blocked} height={10}/>
            </TouchableOpacity>

            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    containerMap: {
        
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    buttonPr: {
        marginLeft: 200,
        marginTop: -20,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '20%',
        height: 60,
        // backgroundColor: '',
        elevation: 10,
        borderRadius: 50
    },

    buttonSp: {
        marginLeft: 220,
        marginTop: 180,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '20%',
        height: 60,
        // backgroundColor: '',
        elevation: 10,
        borderRadius: 50
    },

    buttonCe: {
        marginLeft: 320,
        marginTop: 120,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: '20%',
        height: 60,
        // backgroundColor: '',
        elevation: 10,
        borderRadius: 50
    },

    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    conteudo: {
        height: '50%',
        alignItems: 'center',
        // margin: 20,
        // justifyContent: 'center',
    },
})

export default Menu