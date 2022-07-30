import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput
} from 'react-native';
import {
  modalpaypalcard,
  modaldbcard,
  menu,
  locationBtn,
  car,
  boat,
  pakages,
  house,
  edit,
  building,
  done,
  clock,
  backArrow,
  activeDone,
  Ellipse,
  reward,
  star,
  messageIcon,
  userImage,
  mile,
  dollar,
  time,
  phone,
  loader,
  calinder
} from '../../assets';
import { Icon } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import { Button, Card, ChildModal, GoogleMap } from '../../component';


const Home = (props) => {
  const refRBSheet = useRef()
  const [currenLocation, setCurrenLocation] = useState({});
  const [shareSets, setShareSets] = useState(false);
  const [activeButton, setActiveButton] = useState();
  const [shoWModal, setShoWModal] = useState(false);
  const [componentNumber, setComponentNumber] = useState(1);
  const [payment, setPayment] = useState(1);
  const [loderModal, setLoaderModal] = useState(false)
  const [id, setId] = useState()
  const [roundTripModal, setRoundTripModal] = useState(false)
  const [cancleModal, setCancleModal] = useState(false)


  const createRef = {
    refRBSheet: useRef(),
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          'title': 'Location Access Required',
          'message': 'This App needs to Access your location'
        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          _getCurrentLocation();
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        console.log("🚀 ~ file: index.js ~ line 79 ~ requestLocationPermission ~ err", err)
      }
    }
    requestLocationPermission();
  }, [])

  const _getCurrentLocation = () => {
    Geolocation.getCurrentPosition(geo_success => {
      const { latitude, longitude } = geo_success.coords
      setCurrenLocation({ latitude, longitude })
    }, geo_error => {
      console.log("🚀 ~ file: index.js ~ line 92 ~ Home ~ geo_error", geo_error)
    }, { enableHighAccuracy: false, timeout: 20000, maximumAge: 3600000 });
  }

  const openBottomSheet = (val) => {
    setId(val)
    createRef.refRBSheet.current.open();
  };

  const colseBottomSheet = () => {
    setComponentNumber(1)
    setActiveButton(null)
    setShareSets(false)
    createRef.refRBSheet.current.close()
  }
  const requestTrip = () => {
    createRef.refRBSheet.current.close();
    setLoaderModal(true)
    setTimeout(() => {
      setComponentNumber(3)
      setLoaderModal(false)
      createRef.refRBSheet.current.open()
    }, 2000)
  }

  const renderchildren = () => {
    return (
      <View style={styles.rbSecondContainer}>
        <View style={styles.trip}>
          <Text style={styles.triptxt}>Trip</Text>
          <TouchableOpacity>
            <Text style={styles.tripEdit}>Edit Ride</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderView}>
          <View style={styles.HeaderChild}>
            <Image source={Ellipse}
              style={styles.imageStyle}
            />
            <View style={styles.borderStyle} />
            <Image source={Ellipse} style={styles.imageStyle} />
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.pickUp}>
              <Text style={styles.pickUpTxt}>Pickup</Text>
              <Text style={styles.pickUpTime}>7:30 PM</Text>
            </View>
            <View>
              <Text style={styles.pickUpLocation}>
                Neon Café, 23/A Park Avenue
              </Text>
            </View>
            <View style={styles.pickDropSeprator}>
              <View style={styles.pickDropSepratorLine} />
              <TouchableOpacity>
                <Icon
                  type="antdesign"
                  name="pluscircle"
                  size={20}
                  color={'#DDDDDD'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.pickUp}>
              <Text style={styles.pickUpTxt}>Drop-off</Text>
              <Text style={styles.pickUpTime}>9:00 PM</Text>
            </View>
            <View>
              <Text style={styles.pickUpLocation}>
                Rex House, 123 USA
              </Text>
            </View>
            <View style={styles.pickDropSepratorLineTwo} />
          </View>
        </View>
        {id == 'car' &&
          <>
            <View style={styles.ride}>
              <TouchableOpacity onPress={() => setShareSets(!shareSets)}>
                <Image
                  source={!shareSets ? done : activeDone}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
              <Text style={styles.rideTxt}>Wanna Share Your Ride?</Text>
            </View>
            {shareSets && (
              <View style={styles.shareset}>
                <Text style={styles.shareSetsTxt}>
                  How Many Seats You Want to share
                </Text>
                <View style={styles.shareSetsBtn}>
                  <Button
                    btnViewStyle={
                      activeButton === '1'
                        ? styles.shareBtnAvtive
                        : styles.shareBtn
                    }
                    btnTextStyle={
                      activeButton === '1'
                        ? styles.shareBtnTxtAvtive
                        : styles.shareBtnTxt
                    }
                    onPressButton={() => {
                      setActiveButton('1');
                    }}
                    title="1"
                  />
                  <Button
                    btnViewStyle={
                      activeButton === '2'
                        ? styles.shareBtnAvtive
                        : styles.shareBtn
                    }
                    btnTextStyle={
                      activeButton === '2'
                        ? styles.shareBtnTxtAvtive
                        : styles.shareBtnTxt
                    }
                    onPressButton={() => {
                      setActiveButton('2');
                    }}
                    title="2"
                  />
                  <Button
                    btnViewStyle={
                      activeButton === '3'
                        ? styles.shareBtnAvtive
                        : styles.shareBtn
                    }
                    btnTextStyle={
                      activeButton === '3'
                        ? styles.shareBtnTxtAvtive
                        : styles.shareBtnTxt
                    }
                    onPressButton={() => {
                      setActiveButton('3');
                    }}
                    title="3"
                  />
                </View>
              </View>
            )}
            <View style={styles.Schedule}>
              <View style={styles.ModalView1}>
                <Image source={done}
                  style={styles.imageStyle}
                />
                <Text style={styles.rideTxt}>Schedule Time</Text>
              </View>
              <View style={{ flexDirection: 'row', }}>
                <Button
                  btnViewStyle={{ width: 45, height: 45, marginRight: 5 }}
                  title="Now"
                  btnTextStyle={{ fontSize: 12 }}
                />
                <Image resizeMode='stretch' source={clock}
                  style={{ height: 45, width: 45 }}
                />
              </View>
            </View>
          </>
        }
        {id == 'boat' &&
          <>

            <View style={styles.Schedule}>
              <View style={styles.ModalView1}>
                <Image source={done} style={styles.imageStyle} />
                <Text style={styles.rideTxt}>One-Way</Text>
              </View>
            </View>

            <View style={styles.Schedule}>
              <TouchableOpacity onPress={() => setRoundTripModal(true)}
                style={styles.ModalView1}
              >
                <Image source={done} style={styles.imageStyle} />
                <Text style={styles.rideTxt}>Round Trip</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Schedule}>
              <View style={styles.ModalView1}>
                <Image source={done} style={styles.imageStyle} />
                <Text style={styles.rideTxt}>Departure Date</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  btnViewStyle={{ width: 40, height: 40, marginRight: 5 }}
                  btnTextStyle={{ fontSize: 12 }}
                  title="Now"
                />
                <Image resizeMode='stretch'
                  source={clock} style={{ height: 40, width: 40 }}
                />
              </View>
            </View>

            <View style={styles.boatride}>
              <TouchableOpacity onPress={() => setShareSets(!shareSets)}>
                <Image
                  source={!shareSets ? done : activeDone}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
              <Text style={styles.rideTxt}>Wanna Share Your Ride?</Text>
            </View>

            {shareSets && (
              <View style={styles.shareset}>
                <Text style={styles.shareSetsTxt}>
                  How Many Seats You Want to share
                </Text>
                <View style={styles.shareSetsBtn}>
                  <Button
                    btnViewStyle={
                      activeButton === '1'
                        ? styles.shareBtnAvtive
                        : styles.shareBtn
                    }
                    btnTextStyle={
                      activeButton === '1'
                        ? styles.shareBtnTxtAvtive
                        : styles.shareBtnTxt
                    }
                    onPressButton={() => {
                      setActiveButton('1');
                    }}
                    title="1"
                  />
                  <Button
                    btnViewStyle={
                      activeButton === '2'
                        ? styles.shareBtnAvtive
                        : styles.shareBtn
                    }
                    btnTextStyle={
                      activeButton === '2'
                        ? styles.shareBtnTxtAvtive
                        : styles.shareBtnTxt
                    }
                    onPressButton={() => {
                      setActiveButton('2');
                    }}
                    title="2"
                  />
                  <Button
                    btnViewStyle={
                      activeButton === '3'
                        ? styles.shareBtnAvtive
                        : styles.shareBtn
                    }
                    btnTextStyle={
                      activeButton === '3'
                        ? styles.shareBtnTxtAvtive
                        : styles.shareBtnTxt
                    }
                    onPressButton={() => {
                      setActiveButton('3');
                    }}
                    title="3"
                  />
                </View>
              </View>
            )}

          </>
        }
        <View
          style={styles.ModalFooterBtn1}>
          <TouchableOpacity
            onPress={() => createRef.refRBSheet.current.close()}>
            <Image
              resizeMode='stretch'
              source={backArrow}
              style={styles.BackbtnModal}
            />
          </TouchableOpacity>
          <Button
            btnViewStyle={styles.ModalBookBtn}
            title="Book Now"
            onPressButton={() => {
              if (id === 'boat') {
                setComponentNumber(2)
              }
              else {
                if (activeButton == null) {
                  setShoWModal(true);
                } else {
                  setComponentNumber(4)
                }
              }
            }}
          />
        </View>
        <Modal isVisible={shoWModal} style={{ marginHorizontal: 0 }}>
          {renderModal()}
        </Modal>
      </View>
    );
  };

  const renderModal = () => (
    <View style={styles.modal}>
      <View style={styles.modalView}>
        <Text style={styles.modalTxt}>
          Wanna See the Available Shared Rides
        </Text>
        <View
          style={styles.ModalViewStyle}>
          <Button
            title="No"
            btnViewStyle={styles.modalBtn}
            btnTextStyle={styles.modalNoBtnTxt}
            onPressButton={() => {
              setShoWModal(false);
              setComponentNumber(2);
            }}
          />
          <Button
            title="Yes"
            btnViewStyle={styles.modalYesBtn}
            onPressButton={() => {
              setShoWModal(false);
              setComponentNumber(4);
            }}
          />
        </View>
      </View>
    </View>
  )

  const renderchildrenTwo = () => {
    return (
      <View style={styles.rbSecondContainer}>
        <View style={styles.trip}>
          <Text style={styles.triptxt}>Select Payment Type</Text>
        </View>

        <TouchableOpacity onPress={() => setPayment(1)} style={styles.paymentCard}>
          <Image source={modalpaypalcard} style={styles.paypalImage} />
          <View style={styles.paymentCardTxtView}>
            <Text style={styles.paymentCardTxt}>Paypal</Text>
            <Text style={styles.PaymentModalText}>**** **** **** 1234</Text>
          </View>
          <TouchableOpacity style={payment == 1 ? styles.paymentActiveIcon : styles.paymentIcon} >
            <Icon name='done' type='material' size={23} color={"#fff"} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPayment(2)} style={styles.paymentCard}>
          <Image source={modaldbcard} style={styles.paypalImage} />
          <View style={styles.paymentCardTxtView}>
            <Text style={styles.paymentCardTxt}>Debit/Credit</Text>
          </View>
          <TouchableOpacity style={payment == 2 ? styles.paymentActiveIcon : styles.paymentIcon} >
            <Icon name='done' type='material' size={23} color={"#fff"} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPayment(3)} style={styles.paymentCard}>
          <Image source={reward} style={styles.paypalImage} />
          <View style={styles.paymentCardTxtView}>
            <Text style={styles.paymentCardTxt}>Rewards</Text>
            <Text style={styles.PaymentModalText}>$500</Text>
          </View>
          <TouchableOpacity style={payment == 3 ? styles.paymentActiveIcon : styles.paymentIcon} >
            <Icon name='done' type='material' size={23} color={"#fff"} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View
          style={styles.ModalFooterBtn1}>
          <TouchableOpacity
            onPress={() => setComponentNumber(1)}>
            <Image
              resizeMode='stretch'
              source={backArrow}
              style={styles.BackbtnModal}
            />
          </TouchableOpacity>
          <Button
            btnViewStyle={styles.ModalBookBtn}
            onPressButton={() => requestTrip()}
            title="Request a Trip"
          />
        </View>
      </View>
    )
  }

  const renderchildrenThree = () => {
    return (
      <View style={styles.rbSecondContainer1}>
        <View style={styles.rbsecondMeinView}>
          <View>
            <Image source={userImage} style={{ width: 70, height: 70 }} />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }} >
            <Text style={styles.ModalUserTitile}>
              Jhone Williams
            </Text>
            <Text style={styles.ModalUserSubTitle}>
              Vehicle registration / Model /year
            </Text>
          </View>
          <View>
            <View style={styles.ModalStarMainView}>
              <Image source={star} style={{ width: 10, height: 10 }} />
              <Text style={styles.ModalStarTitle}> 4.89</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Massage')}>
              <Image resizeMode='stretch'
                source={messageIcon}
                style={{ marginTop: 10, width: 25, height: 25, alignSelf: 'flex-end' }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ModalPriseMainView}>

          <View style={styles.ModalpriseView}>

            <Image resizeMode='stretch'
              source={mile}
              style={styles.ModalPriseViewImage}
            />

            <Text style={styles.MoalTextPrise}>21 Miles</Text>

          </View>

          <View style={styles.ModalpriseView}>
            <Image resizeMode='stretch'
              source={time} style={styles.ModalPriseViewImage}
            />
            <Text style={styles.MoalTextPrise}>18 min</Text>
          </View>

          <View style={styles.ModalpriseView}>
            <Image resizeMode='stretch' source={dollar} style={styles.ModalPriseViewImage} />
            <Text style={styles.MoalTextPrise}>$125</Text>
          </View>
        </View>

        <View style={styles.ModalFlexBox}>
          <View
            style={styles.ModalMainView}>
            <Image source={Ellipse} style={styles.imageStyle} />
            <View
              style={styles.ModalMainViewChild}
            />
            <Image source={Ellipse} style={styles.imageStyle} />
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.pickUp}>
              <Text style={styles.pickUpTxt}>Pickup</Text>
              <Text style={styles.pickUpTime}>7:30 PM</Text>
            </View>
            <View>
              <Text style={styles.pickUpLocation}>
                Neon Café, 23/A Park Avenue
              </Text>
            </View>
            <View style={styles.pickDropSeprator}>
              <View style={styles.pickDropSepratorLine} />
              <Icon
                type="antdesign"
                name="pluscircle"
                size={25}
                color={'#DDDDDD'}
              />
            </View>
            <View style={styles.pickUp}>
              <Text style={styles.pickUpTxt}>Drop-off</Text>
              <Text style={styles.pickUpTime}>7:30 PM</Text>
            </View>
            <View>
              <Text style={styles.pickUpLocation}>
                Rex House, 123 USA
              </Text>
            </View>
            <View style={styles.pickDropSepratorLineTwo} />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <GoogleMap
            mapViewStyle={{ height: 150 }}
            latitude={parseInt(currenLocation.latitude) || 24.8655195}
            longitude={parseInt(currenLocation.longitude) || -12.02335}
          />
        </View>
        <View
          style={styles.ModalFooterBtn1}>
          <Image
            resizeMode='stretch'
            source={phone}
            style={styles.BackbtnModal}
          />
          <Button
            btnViewStyle={styles.ModalBookBtn}
            title='Cancel Request'
            onPressButton={() => {
              setCancleModal(true)
            }}
          />
        </View>
      </View>
    )
  }

  setTimeout(() => {
    _getCurrentLocation()
  }, 2000);

  const rinderchildrenFour = () => {
    return (
      <View style={styles.rbforthContainer}>
        <View style={styles.trip}>
          <Text style={styles.triptxt}>Sharing Rides</Text>
        </View>
        <View style={{ marginTop:15 }}>
          <Card
            imageSource={userImage}
            Name="Jhone Williams"
            location="Vehicle registration / Model /year"
            rating="4.8"
            coast='54.45'
            Time='45:30'
            pickUpTime='7:30'
            dorpOffTime='9:00'
            pickUpLocation=" Neon Café, 23/A Park Avenue"
            dropOffLocation='Neon Café, 23/A Park Avenue'
            accept={true}
            onPressAccept={() => setComponentNumber(2)}
          />
        </View>
        <View style={{ marginVertical: 0 }}>
          <Card
            imageSource={userImage}
            Name="Jhone Williams"
            location="Vehicle registration / Model /year"
            rating="4.8"
            coast='54.45'
            Time='45:30'
            pickUpTime='7:30'
            dorpOffTime='9:00'
            pickUpLocation=" Neon Café, 23/A Park Avenue"
            dropOffLocation='Neon Café, 23/A Park Avenue'
            accept={true}
          />
        </View>

      </View>
    )
  }

  const loaderModalFunction = () => {
    return (
      <Modal isVisible={loderModal} >
        <View style={styles.modalcontainer}>
          <LottieView
            resizeMode='contain'
            source={loader}
            autoPlay
            loop
            style={{ width: 100 }}
          />
          <Text style={styles.textstyle}>
            We are Processing Your Booking
          </Text>
          <Text style={{
            color: "#222222",
            fontSize: 18
          }}>Your ride will arrive soon</Text>
        </View>
      </Modal>
    )
  }


  const childModalChildren = () => {
    return (
      <View style={styles.boatModalView}>
        <Text style={styles.boatModal}>
          Departure Date
        </Text>
        <View style={styles.DepartureInput}>
          <TextInput style={styles.DepartureDateInput} placeholder="9:00 PM" placeholderTextColor={'#222222'} />
          <TextInput style={styles.DepartureDateInput} placeholder="6/30/2022" placeholderTextColor={'#222222'} />
          <Image source={calinder} style={styles.calinderimagestyle} />
        </View>
        <Text style={styles.boatModal}>
          Return Date
        </Text>
        <View style={styles.DepartureInput}>
          <TextInput style={styles.DepartureDateInput} placeholder="9:00 PM" placeholderTextColor={'#222222'} />
          <TextInput style={styles.DepartureDateInput} placeholder="6/30/2022" placeholderTextColor={'#222222'} />
          <Image source={calinder} style={styles.calinderimagestyle} />
        </View>
        <Button title="Submit" onPressButton={() => {
          setComponentNumber(2)
          setRoundTripModal(false)
        }} />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loderModal && loaderModalFunction()}
        <View style={styles.mainContainer}>
          <GoogleMap
            mapViewStyle={{ height: 330, marginVertical: 0 }}
            latitude={parseInt(currenLocation.latitude) || 24.8655195}
            longitude={parseInt(currenLocation.longitude) || -12.02335}
          />
          <View style={styles.container}>

            <View>
              <Text style={styles.selectRidetxt}>Select a Ride</Text>
            </View>
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardCarView}
                onPress={() => openBottomSheet('car')}>
                <Image
                  source={car}
                  resizeMode="center"
                  style={styles.cardImage}
                />
                <Text style={styles.cardTxt}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardView} onPress={() => openBottomSheet('boat')}>
                <Image
                  source={boat}
                  resizeMode="center"
                  style={styles.cardImage}
                />
                <Text style={styles.cardTxt}>Boat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardView}>
                <Image
                  source={pakages}
                  resizeMode="center"
                  style={styles.cardImage}
                />
                <Text style={styles.cardTxt}>package</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.locationView}>
              <View>
                <Image source={house} style={styles.locationViewIcon} />
              </View>
              <View style={styles.locationViewTxt}>
                <Text style={styles.time}>
                  <Text style={styles.hometitle}>Home</Text> ( 10 min ago
                  and 2 km )
                </Text>
                <Text style={styles.location}>Studio 10 Joke Stream</Text>
              </View>
              <TouchableOpacity onPress={() => props.navigation.navigate('CurrentLocation')}>
                <Image resizeMode='stretch' source={edit} style={styles.editViewIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.locationView}>
              <View>
                <Image source={building} style={styles.locationViewIcon} />
              </View>
              <View style={styles.locationViewTxt}>
                <Text style={styles.time}>
                  <Text style={styles.hometitle}>Work</Text> ( 1 hour ago
                  and 2 km )
                </Text>
                <Text style={styles.location}>Studio 10 Joke Stream</Text>
              </View>
              <TouchableOpacity onPress={() => props.navigation.navigate('CurrentLocation')}>
                <Image resizeMode='stretch' source={edit} style={styles.editViewIcon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate(('Profile'))} style={styles.footer}>
              <View style={styles.footerBtnView}>
                <Button title="VISA" btnViewStyle={styles.btn} btnTextStyle={styles.btnText} />

                <Text style={styles.footertxt}>****7538</Text>

                <Icon
                  type="ionicon"
                  name="chevron-forward"
                  size={25}
                  color={'#000'}
                />
              </View>

              <View style={{ width: 50, height: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10, borderLeftWidth: 0.7, borderLeftColor: "#9D9D9D" }}>
                <Icon
                  type="entypo"
                  name="dots-three-horizontal"
                  size={22}
                  color={'#000'}
                />
              </View>

            </TouchableOpacity>
          </View>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Image source={menu} style={styles.menuIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('CurrentLocation', { id: 'card' })}>
              <Image source={locationBtn} style={styles.locationIcon} />
            </TouchableOpacity>
          </View>


        </View>
        <RBSheet
          ref={createRef.refRBSheet}
          customStyles={{
            container: {
              backgroundColor: '#222222',
              height: 600,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            },
          }}>
          <View style={styles.rbFirstContainer}>
            <Text style={styles.Txt}>{
              componentNumber === 1 ? 'Create Trip'
                : componentNumber === 2 ? 'Payment Method'
                  : componentNumber === 3 ? 'Ride Info' : 'Sharing Rides'}
            </Text>
            <TouchableOpacity
              onPress={() => colseBottomSheet()}>
              <Icon type="antdesign" name="close" size={20} color={'#ffffff'} />
            </TouchableOpacity>
          </View>

          <View style={styles.pagination}>
            <Text style={styles.paginationActiveNumber}>1</Text>
            <View style={styles.paginationLine} />
            <Text style={componentNumber === 2 ? styles.paginationActiveNumber : componentNumber === 3 ? styles.paginationActiveNumber : styles.paginationNumber}>2</Text>
            <View style={styles.paginationLine} />
            <Text style={componentNumber === 3 ? styles.paginationActiveNumber : styles.paginationNumber}>3</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginBottom: 0 }}>{
              componentNumber === 1 ? renderchildren() :
                componentNumber === 2 ? renderchildrenTwo() :
                  componentNumber === 3 ? renderchildrenThree() :
                    componentNumber === 4 && rinderchildrenFour()
            }</View>
          </ScrollView>
        </RBSheet>
        <ChildModal
          isVisible={roundTripModal}
          setIsVisible={() => setRoundTripModal(false)}
          title="Round Trip - Select Date"
          Children={childModalChildren()}
        />

        {cancleModal &&
          <Modal isVisible={true} >
            <TouchableOpacity activeOpacity={1} onPress={() => { setCancleModal(false), createRef.refRBSheet.current.close(), setComponentNumber(1) }}>
              <View style={styles.modalcontainer2}>
                <Text style={styles.textstyle}>
                  Request Cancelled.
                </Text>
              </View>
            </TouchableOpacity>
          </Modal>
        }

      </ScrollView >

    </SafeAreaView >
  );
};

export default Home;
