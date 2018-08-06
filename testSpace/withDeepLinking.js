
import { createDeepLinkingHandler } from 'react-native-deep-link';
import { NavigationActions } from 'react-navigation';

const handleColorScreenDeepLink = ({ dispatch }) => ({ params: { color } }) => {
    dispatch(NavigationActions.navigate({
        routeName: 'Color',
        params: { color }
    }));
}

export default withDeepLinking = createDeepLinkingHandler([{
    name: 'testspace:',
    routes: [{
        name: '/colors/:color',
        callback: handleColorScreenDeepLink
    }]
}]);