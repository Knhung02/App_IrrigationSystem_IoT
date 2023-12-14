import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch,
    ImageBackground,
} from 'react-native'
import { images, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isIOS } from '../utilies/Device';
import colors from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Settings({ navigation }) {
    const [isEnabledLockApp, setEnabledLockApp] = useState(true)
    const [isUseFingerprint, setUseFingerprint] = useState(false)
    // Hàm đăng xuất
    const handleLogout = async () => {
        // Xóa AccessToken từ AsyncStorage
        await AsyncStorage.removeItem('accessToken');

        // Đưa người dùng đến màn hình đăng nhập (hoặc màn hình chính của ứng dụng)
        navigation.navigate('Welcome');
    };
    return (
        <View style={{
            flex: 100,
            backgroundColor: '#ffffff',
            flexDirection: 'row',
        }}>
            <ImageBackground
                source={images.background2}
                resizeMode="cover"
                style={{
                    flex: 100,
                }}
            >
                <View style={{
                    // flex:100,
                    height: isIOS() ? 115 : 77,
                    backgroundColor: '#a695e1',
                    // borderBottomRightRadius: 15,
                    // borderBottomLeftRadius: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                }}>
                    <View style={{ marginTop: isIOS() ? 55 : 20 }} >
                        <Text style={{
                            color: 'white',
                            fontSize: fontSizes.h1,
                            marginLeft: 20,
                            alignSelf: 'center',
                            alignContent: 'center',
                        }}>
                            Settings
                        </Text>

                    </View>

                </View>
                {/* </View> */}
                <View style={{}}>
                    <View style={{
                        height: 40,
                        // backgroundColor: 'rgba(0,0,0,0.2)',
                        backgroundColor: '#ccceff',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h4,
                            paddingStart: 10,
                        }}>Common</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="globe"
                            style={{ marginStart: 10 }}
                            size={20} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Language</Text>
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingEnd: 10,
                            opacity: 0.5,
                        }}>English</Text>
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="bell"
                            style={{ marginStart: 10 }}

                            size={20} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Notifications</Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </View>
                    <View style={{
                        height: 40,
                        // backgroundColor: 'rgba(0,0,0,0.2)',
                        backgroundColor: '#ccceff',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h4,
                            paddingStart: 10,
                        }}>Account</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="envelope"
                            style={{ marginStart: 10 }}
                            size={16} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Email</Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            paddingVertical: 10,
                            alignItems: 'center',
                        }}
                        // onPress={() => {
                        //     navigation.navigate('Welcome')
                        // }}
                        onPress={handleLogout}
                    >
                        <Icon
                            name="sign-out-alt"
                            style={{ marginStart: 10 }}
                            size={16} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Sign out</Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </TouchableOpacity>
                    <View style={{
                        height: 40,
                        // backgroundColor: 'rgba(0,0,0,0.2)',
                        backgroundColor: '#ccceff',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h4,
                            paddingStart: 10,
                        }}>Security</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="door-closed"
                            style={{ marginStart: 10 }}
                            size={16} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Lock app in background</Text>
                        <View style={{ flex: 1 }} />
                        <Switch
                            trackColor={{ false: '#bebfe9', true: colors.primary }}
                            thumbColor="white"
                            // ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setEnabledLockApp(!isEnabledLockApp)
                            }}
                            value={isEnabledLockApp}
                            style={{ marginEnd: 10 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="fingerprint"
                            style={{ marginStart: 10 }}
                            size={16} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Use fingerprint</Text>
                        <View style={{ flex: 1 }} />
                        <Switch
                            trackColor={{ false: '#bebfe9', true: colors.primary }}
                            thumbColor="white"
                            onValueChange={() => {
                                setUseFingerprint(!isUseFingerprint)
                            }}
                            value={isUseFingerprint}
                            style={{ marginEnd: 10 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="lock"
                            style={{ marginStart: 10 }}
                            size={16} color={'black'}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingStart: 10,
                        }}>Change password</Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </View>
                    <View style={{
                        height: 40,
                        // backgroundColor: 'rgba(0,0,0,0.2)',
                        backgroundColor: '#ccceff',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h4,
                            paddingStart: 10,
                        }}>Mode</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Image
                            source={images.setting}
                            style={{
                                width: 22,
                                height: 22,
                                marginHorizontal: 10,
                                marginLeft: 8,
                            }}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                        }}>Automation</Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                        <Image
                            source={images.customize}
                            style={{
                                width: 22,
                                height: 22,
                                marginHorizontal: 10,
                                marginLeft: 8,
                            }}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                        }}>Manual</Text>
                        <View style={{ flex: 1 }} />
                        <Icon
                            name="chevron-right"
                            style={{
                                paddingEnd: 10,
                                opacity: 0.5,
                            }}
                            size={20} color={'black'}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Settings
