import React from 'react'
import { Header } from 'react-native-elements'
import { primaryColor, Typography } from '../styles/Global'

export class AppHeader extends React.Component {
    render() {
        return(
            <Header
                centerComponent={{text: 'Priorities', style: Typography.headingOne}}
                rightComponent={{ icon: 'more-vert', color: '#fff' }}
                backgroundColor={primaryColor}
            />
        )
    }
}