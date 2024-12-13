import React from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import { Colors } from '../../common/Styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  dropdownContainer: {
    width: '100%',
    //height:80,
    // paddingVertical:10,
    // marginVertical:10,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: Colors.GRAY_90,
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000', // iOS
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2, // iOS
    shadowRadius: 3.5, // iOS
    elevation: 5, // Android
  },
  dropDownContainer: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  itemStyle: {
    justifyContent: 'flex-start',
    backgroundColor: Colors.PRIMARY_COLOR,
    borderColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
  },
  labelStyle: {
    color: '#575757',
    fontFamily:'lato-bold',
  },
  selectedItemContainer: {
    backgroundColor: 'white',
    borderColor: Colors.PRIMARY_COLOR,
    borderRadius: 12,
    borderWidth: 2,
  },
  selectedItemLabel: {
    color: Colors.PRIMARY_COLOR,
    fontFamily:'lato-bold',
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 16,
    fontFamily:'lato',
  },
  listLabel: {
    color: 'white',
    fontFamily:'lato',
  },
  label: {
    fontFamily:'lato',
    //color:'white',
  },
});

type Props = {
  onChangeValue?: (prop: any) => void;
  placeholder: string;
  open: boolean;
  value: string | any | null;
  items: [] | ItemType<number>[];
  setOpen: (prop: any) => void;
  setValue: (prop: any) => void;
  setItems?: (prop: any) => void;
};
const DropDown = ({
  onChangeValue,
  open,
  setOpen,
  value,
  setValue,
  items,
  setItems,
  placeholder,
}: Props) => {
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        //onChangeValue={onChangeValue}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropDownContainer}
        listItemContainerStyle={styles.itemStyle}
        labelStyle={styles.labelStyle}
        selectedItemContainerStyle={styles.selectedItemContainer}
        selectedItemLabelStyle={styles.selectedItemLabel}
        listItemLabelStyle={styles.listLabel}
        placeholderStyle={styles.label}
        dropDownDirection="BOTTOM"
        listMode="MODAL"
        onChangeValue={onChangeValue}
      />
      {/* <Text style={styles.selectedValue}>Selected Value: {value}</Text> */}
    </View>
  );
};

export default DropDown;
