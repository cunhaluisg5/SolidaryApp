import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import BottomNavigation, { IconTab, Badge } from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

class Main extends React.Component {
    state = {
        activeTab: 'info'
    }

    tabs = [
        {
            key: 'info',
            label: 'Info',
            barColor: '#4169E1',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'information-outline'
        },
        {
            key: 'account',
            label: 'Account',
            barColor: '#FF8C00',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'account-circle'
        },
        {
            key: 'money',
            label: 'Money',
            barColor: '#006400',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'currency-usd'
        },
        {
            key: 'settings',
            label: 'Settings',
            barColor: '#A0522D',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'settings'
        }
    ]

    state = {
        activeTab: this.tabs[0].key
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon size={35} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <IconTab
            isActive={isActive}
            showBadge={tab.key === 'account'}
            renderBadge={() => <Badge>2</Badge>}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                </View>
                <BottomNavigation
                    tabs={this.tabs}
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    useLayoutAnimation
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#FFF'
    },
});

export default Main