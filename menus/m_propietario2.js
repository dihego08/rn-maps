import React, { useState, Component } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';

export default class m_propietario extends Component {

    constructor(props) {

        super(props);

    }

render() {

    /*----BOTON MENU-PARTE1---*/
    const { navigate } = this.props.navigation;

    return (
        <View style={styles.viewStyle}>

            {/*------ENCABEZADO-----*/}
            <View style={styles.encabezado}>
                <View>
                    <Text style={styles.textotitulo1}>Hola, Yaraliz</Text>
                    <Text style={styles.texto2}>¡Bienvenid(a)! </Text>
                    <Text style={styles.cuenta}><Text style={styles.texto1}>Cuenta:</Text> <Text style={styles.texto2}>Propietario</Text></Text> 
                </View>
                <View>
                    <Image style={styles.imgusuario} source={require('../assets/imgs/usuario_f.png')} />
                </View>
            </View>
            {/*---------------------*/}


            <View style={styles.container}>

                <View style={styles.imagelogox2}>
                    <Image style={styles.imagelogo} source={require('../assets/imgs/LOGO1.png')} />
                    <Text style={styles.textotitulo2}> ADMINISTRACIÓN </Text>
                </View>

                <View style={styles.menu}>
                    <Pressable
                        onPress={() => navigate('ClientesPropietario')}
                        style={({ pressed }) => {
                            return { opacity: pressed ? 0 : 1 }
                        }}>
                        <Image style={styles.imageboton} source={require('../assets/imgs/menu_clientes.png')} />
                    </Pressable>
                    <Pressable
                        onPress={() => navigate('crud')}
                        style={({ pressed }) => {
                            return { opacity: pressed ? 0 : 1 }
                        }}>
                        <Image style={styles.imageboton} source={require('../assets/imgs/menu_productos.png')} />
                    </Pressable>
                </View>
                <View style={styles.menu}>
                    <Pressable
                        onPress={() => navigate('NuevoConductor')}
                        style={({ pressed }) => {
                            return { opacity: pressed ? 0 : 1 }
                        }}>
                        <Image style={styles.imageboton} source={require('../assets/imgs/menu_conductores.png')} />
                    </Pressable>
                    <Pressable
                        onPress={() => navigate('NuevoVehículo')}
                        style={({ pressed }) => {
                            return { opacity: pressed ? 0 : 1 }
                        }}>
                        <Image style={styles.imageboton} source={require('../assets/imgs/menu_vehiculos.png')} />
                    </Pressable>
                </View>
                <View style={styles.menu}>
                    <Pressable
                        onPress={() => navigate('NuevaRuta')}
                        style={({ pressed }) => {
                            return { opacity: pressed ? 0 : 1 }
                        }}>
                        <Image style={styles.imageboton} source={require('../assets/imgs/menu_rutas.png')} />
                    </Pressable>
                </View>
            </View>



        </View>
    );
}
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    /*----ESTILOS ENCABEZADO----*/
    encabezado: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    textotitulo1: {
        color: '#0000CC',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    textotitulo2: {
        color: '#0000CC',
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto1: {
        color: '#0000CC',
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    texto2: {
        color: '#0000CC',
        fontSize: 15,
        paddingLeft: 10,
    },
    cuenta:{
        paddingLeft: 10,
    },
    imgusuario: {
        width: 80,
        height: 80,
        marginLeft: 100,
    },
    /*----------------------------*/

    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#fff',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        elevation: 30,
    },
    menu: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageboton: {
        width: 130,
        height: 130,
        marginLeft: 15,
    },
    imagelogo: {
        width: 110,
        height: 110,
    },
    imagelogox2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});