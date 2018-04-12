import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';
import { makeHitSlop } from '../../utils/metrics';

const ICON_SIZE = 25;

const styles = StyleSheet.create({
  root: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  productNameContainer: {
    flex: 0.9
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.SECONDARY
  },
  addToCartContainer: {
    flex: 0.2,
    alignItems: 'center'
  },
  addToCartButton: {
    color: '#000'
  }
});

const ProductCardHeader = ({ name }) => (
  <View style={styles.root}>
    <View style={styles.productNameContainer}>
      <Text style={styles.productName}>{name}</Text>
    </View>

    <View style={styles.addToCartContainer}>
      <Touchable hitSlop={makeHitSlop(20)} feedback="opacity">
        <FontAwesome name="cart-plus" size={ICON_SIZE} />
      </Touchable>
    </View>
  </View>
);

export default ProductCardHeader;

// const Root = styled.View`
//   height:50;
//   flexDirection:row;
//   alignItems:center;
// `;

// const AvatarContainer = styled.View`
//   flex:0.2;
//   justifyContent:center;
//   alignSelf:stretch;

// `;

// const Avatar = styled.Image`
//   height:${AVATAR_SIZE};
//   width:${AVATAR_SIZE};
//   borderRadius:${AVATAR_RADIUS};
// `;

// const MetaContainer = styled.View`
//   flex:1;
//   alignSelf:stretch;
// `;
// const MetaTopContainer = styled.View`
//   flex:1;
//   alignSelf:stretch;
//   flexDirection:row;
//   alignItems:center;
//   justifyContent:flex-start;
// `;
// const MetaBottomContainer = styled.View`
//   flex:0.8;
//   alignSelf:flex-start;
//   justifyContent:center;
// `;

// const MetaText = styled.Text`
//   fontSize:14;
//   fontWeight:600;
//   color: ${props => props.theme.LIGHT_GRAY}
// `;
// const MetaFullName = styled.Text`
//   fontSize:16;
//   fontWeight:bold;
//   color: ${props => props.theme.SECONDARY}
// `;

// export default function FeedCardHeader({userName, firstName, lastName, avatar, createdAt}){
//   return(
//     <Root>
//       <AvatarContainer>
//         <Avatar source={{ uri: avatar || fakeAvatar }}/>
//       </AvatarContainer>
//       <MetaContainer>
//         <MetaTopContainer>
//           <MetaFullName>
//             {firstName} {lastName}
//           </MetaFullName>
//           <MetaText style={{marginLeft:5}}>
//             @{userName}
//           </MetaText>
//         </MetaTopContainer>
//         <MetaBottomContainer>
//           <MetaText>
//             {distanceInWordsToNow(createdAt)} ago
//           </MetaText>
//         </MetaBottomContainer>
//       </MetaContainer>

//     </Root>
//   )
//}
