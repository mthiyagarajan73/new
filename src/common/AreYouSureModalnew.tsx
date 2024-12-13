import React from 'react';
import {View, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import Loader from '../packages/Loader';
import SvgIdea from '../icons/SvgIdea';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#007bff',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    top: -35,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 16,
  },
});
type Props = {
  open: boolean;
  handleNo: () => void;
  handleYes: () => void;
  title: string;
  loader?: boolean;
  description?: string;
};
const AreYouSureModal = ({
  open,
  handleNo,
  handleYes,
  title,
  loader,
  description,
}: Props) => {

  return (<>
{loader&&<Loader />}
    <Modal
      visible={open}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
          <SvgIdea />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{description}</Text>
          <TouchableOpacity disabled={loader} style={styles.button} onPress={handleYes}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={loader} style={styles.cancelButton} onPress={handleNo}>
            <Text style={styles.cancelButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal></>
  );
};

export default AreYouSureModal;
