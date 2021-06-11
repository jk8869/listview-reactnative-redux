  import { ListItem, Avatar } from 'react-native-elements'
  import React, {useEffect } from 'react';
  import { View, FlatList} from 'react-native';
  import { fetchUsers } from '../redux/reducers/users' 
  import { useDispatch, connect } from 'react-redux'; 
  import Icon from 'react-native-vector-icons/FontAwesome';

  const UserList = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers(props.page));      
    }, []);    

    return (<View style={{ flex: 1 }}>
      <FlatList
        data={props.users}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => {
              props.navigation.navigate('UserDetail', {
              item: item,            
            });
          }}>
            <Avatar source={{uri: item.picture}} />
            <ListItem.Content>
              <ListItem.Title>{item.title + ' ' + item.firstName + ' ' + item.lastName}</ListItem.Title>
              <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>            
            <View>
              <Icon name='chevron-right' color='#ccc'/>
            </View>
          </ListItem>
        )}        
        onEndReached={() => dispatch(fetchUsers(props.page))}               
      />
    </View>);
  }

  const mapStateToProps = state => {
    return {
      users: state.users.users,
      page: state.users.page
    };
  };
  export default connect(mapStateToProps)(UserList);