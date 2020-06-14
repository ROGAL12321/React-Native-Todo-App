import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ConfirmationModal = ({isModalVisible, setModalVisible, handleSubmit}) => {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
      <View style={styles.modalContainer}>
        <Text>Are you sure?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    maxHeight: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cancelButton: {
    backgroundColor: '$mainAccent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: '#fff',
  },
});

export default ConfirmationModal;
