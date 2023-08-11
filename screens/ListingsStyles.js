import { StyleSheet } from 'react-native';

const ListingsStyles = StyleSheet.create({
  triple: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    overflowX: 'hidden',
  },
  complexComponent: {
    position: 'relative',
    height: '80vh',
    overflow: 'hidden',
    marginTop: 90,
    marginBottom: 90,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  rightList: {
    position: 'absolute',
    right: '0.5vw',
    padding: 2,
    width: '20vw',
  },
  rightBox: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  toggleButton: {
    cursor: 'pointer',
  },
  leftMenu: {
    position: 'absolute',
    left: '0.5vw',
    width: '10vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftMenuOther: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    bottom: 5,
    marginTop: 25,
  },
  commLink: {
    display: 'flex',
    width: '90%',
    margin: 2,
  },
  commImg: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: '50%',
    width: '30%',
    aspectRatio: 1,
    margin: 5,
  },
  commName: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    cursor: 'pointer',
  },
  commNameLink: {
    color: 'black',
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius: 5,
    padding: 0,
    paddingHorizontal: 3,
  },
  middleContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    width: '65vw',
  },
  middleOptions: {
    display: 'flex',
    marginBottom: 5,
  },
  listingButton: {
    marginRight: 5,
    padding: 0,
    paddingHorizontal: 5,
    fontSize: 18,
    backgroundColor: 'rgb(237, 237, 237)',
    borderWidth: 0,
  },
  middleUserInput: {
    width: '100%',
  },
  addListingButton: {
    width: '90%',
    marginHorizontal: '5%',
    padding: 10,
    fontSize: 18,
    cursor: 'pointer',
  },
  navigationButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  navButton: {
    height: 20,
  },
  navButtonArrow: {
    fontSize: 25,
  },
  navButtonArrowHover: {
    fontSize: 25,
    fontWeight: '600',
  },
  middleScrollableContent: {
    height: 500,
    overflow: 'hidden',
  },
  yourComponent: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgb(215, 213, 213)',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  listImageContainer: {
    marginRight: 10,
    display: 'flex',
  },
  roundImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
  listingInfo: {
    height: 50,
    margin: 4,
  },
  listTitle: {
    margin: 0,
  },
  listSubtitle: {
    marginVertical: 5,
  },
  description: {
    margin: 0,
    lineHeight: 1.2,
    maxHeight: 36,
    overflow: 'hidden',
    position: 'relative',
    left: 0,
  },
  expanded: {
    maxHeight: 'none',
  },
  inquireButton: {
    float: 'left',
    margin: 10,
    marginRight: 0,
    fontWeight: '400',
    backgroundColor: 'black',
    color: 'white',
    padding: 6,
    borderRadius: 10,
    textDecorationLine: 'none',
    overflow: 'visible',
  },
  inquireButtonHover: {
    backgroundColor: 'purple',
    textDecorationLine: 'none',
  },
  nextListingButton: {
    height: 20,
    position: 'relative',
    top: 0,
  },
  prevListingButton: {
    position: 'relative',
  },
  leftMenuMobile: {
    display: 'none',
  },
  
});

export default ListingsStyles;
