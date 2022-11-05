import { useEffect, useState } from 'react';
import { getApps, getCapabilities, getDevices, getLocations, getPreferences, getRoom, getRooms, getRules, getScenes } from './utils';
import { List, Table} from 'antd';
const Locations = (props) => {
    const [locations, setLocations] = useState();
    useEffect(() => {
      getLocations(props.token)
      .then((locations) => {setLocations(locations)})
      .catch((err) => alert(err));
    }, [])

    const columns = [
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: 'Rooms',
        dataIndex: 'rooms',
        key: 'rooms',
        render: (text) => {
          console.log(text);
          return <Rooms token={props.token} locationId={text}/>
        }
      },
      {
        title: 'Rules',
        dataIndex: 'rules',
        key: 'rules',
        render: (text) => {
          return <Rules token={props.token} locationId={text}/>
        }
      },
    ];
    const dataSource = [];
    for (var i in locations?.items) {
        dataSource.push({key: i, location: locations.items[i].name, rooms: locations.items[i].locationId, rules: locations.items[i].locationId});
    }
    return (<Table dataSource={dataSource} columns={columns} pagination={false}/>);
}
const Rooms = (props) => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    getRooms(props.token, props.locationId)
    .then((rooms) => {setRooms(rooms)})
    .catch((err) => alert(err));
  }, []);
  var data = [];
  for (var i in rooms?.items) {
    data.push({room: rooms.items[i]});
  }
  return <List
  bordered
  dataSource={data}
  renderItem={item => <List.Item>{JSON.stringify(item.room.name)}</List.Item>}
/>
}
const Rules = (props) => {
  const [rules, setRules] = useState();
  useEffect(() => {
    getRules(props.token, props.locationId)
    .then((rules) => {setRules(rules)})
    .catch((err) => alert(err));
  }, []);
  var data = [];
  for (var i in rules?.items) {
    data.push({rule: rules.items[i]});
  }
  console.log(rules);
  return     <List
  bordered
  dataSource={data}
  renderItem={item => <List.Item>{JSON.stringify(item.name)}</List.Item>}
/>
}
const Devices = (props) => {
    const [devices, setDevices] = useState();
    const [locations, setLocations] = useState();
    useEffect(() => {
      getDevices(props.token)
      .then((devices) => {setDevices(devices)})
      .catch((err) => alert(err));

      getLocations(props.token)
      .then((l) => {
        setLocations(l)
      }).catch((err) => alert(err))
    }, []);
    const Room = (props) => {
      const [room, setRoom] = useState();
      useEffect(() => {
        getRoom(props.token, props.locationId, props.roomId)
        .then((room) => {
          setRoom(room.name);
        }).catch((err) => alert(err));
      })
      return room;
    }
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (text) => {
        for (let j in locations?.items) {
          if (locations?.items[j].locationId === text) {
            return locations?.items[j].name;
          }
        }
        return undefined;
      }
    },
    {
      title: 'Room',
      dataIndex: "room",
      key: 'room',
      render: (text, record) => {
        return <Room token={props.token} locationId={record.location} roomId={record.room} />;
      }
    }
  ];
  var dataSource = []
  for (var i = 0; i < devices?.items.length; i++) {
    var locationId = devices?.items[i].locationId;
    var roomId = devices?.items[i].roomId;
    dataSource.push({key: i, name: devices?.items[i].name, location: locationId, room: roomId});
  }
  return (
    <Table dataSource={dataSource} columns={columns} pagination={false} />)
}

const Scenes = (props) => {
    const [scenes, setScenes] = useState();
    useEffect(() => {
      getScenes(props.token)
      .then((scenes) => {setScenes(scenes)})
      .catch((err) => alert(err));
    }, [])
    return (<List
        bordered
        dataSource={scenes?.items}
        renderItem={item => <List.Item>{JSON.stringify(item.sceneName)}</List.Item>}
/>)
}
  
const Preferences = (props) => {
    const [preferences, setPreferences] = useState();
    useEffect(() => {
      getPreferences(props.token)
      .then((preferences) => {setPreferences(preferences)})
      .catch((err) => alert(err));
    }, [])
    const columns = [{
      title: 'Preference',
      dataIndex: 'preference',
      key: 'preference',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Definition',
      dataIndex: "definition",
      key: 'definition',
    }];
    var dataSource = []
    for (let i in preferences?.items) {
      dataSource.push({key: i, 
        preference: preferences.items[i].preferenceId, 
        description: preferences.items[i].description, 
        definition: JSON.stringify(preferences.items[i].definition)})
    }
    return    <Table dataSource={dataSource} columns={columns} pagination={false}/>
}

const Capabilities = (props) => {
  const [capabilities, setCapabilities] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    getCapabilities(props.token)
    .then((capabilities) => {setCapabilities(capabilities)})
    .catch((err) => alert(err));

    setLoading(false);
  }, [loading])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }
  ];
  const dataSource = [];
  for (var i in capabilities?.items) {
      dataSource.push({key: i, name: capabilities.items[i].id, version: capabilities.items[i].version, status: capabilities.items[i].status});
  }
  return (<Table dataSource={dataSource} columns={columns} pagination={false}/>);
} 
const Apps = (props) => {
  const [apps, setApps] = useState();
  useEffect(() => {
    getApps(props.token)
    .then((apps) => {setApps(apps)})
    .catch((err) => alert(err));
  }, [])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }
  ];
  const dataSource = [];
  for (var i in apps?.items) {
      dataSource.push({key: i, name: apps.items[i].appName, type: apps.items[i].appType, description: apps.items[i].description});
  }
  return (<Table dataSource={dataSource} columns={columns} pagination={false} />);
}
const Data = (props) => {
    const key = props.name;
    const token = props.token;
    return (<>
          <h2>Locations</h2>
          <Locations token={token}/>
          <h2>Devices</h2>
          <Devices token={token}/>
          <h2>Preferences</h2>
          <Preferences token={token}/>
          <h2>Scenes</h2>
          <Scenes token={token}/>
          <h2>Capabilities</h2>
          <Capabilities token={token}/>
          <h2>Apps</h2>
          <Apps token={token} />
          </>)
}

export default Data;