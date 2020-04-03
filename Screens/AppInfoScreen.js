import React, { Component } from 'react';
import { ScrollView, Text, Linking } from 'react-native';

import { styles } from '../styles/styles';
const info = `
Η εφαρμογή δημιουργήθηκε καθαρά για να διευκολύνει την αποστολή μηνύματος στο 13033.
Δεν δημιουργήθηκε με σκοπό το κέρδος. Δεν είναι καμίας επίσημης υπηρεσίας ή φορέα.

Η εφαρμογή αποθηκεύει το ονοματεπώνυμό σας και τη διεύθυνση σας τοπικά στο κινητό σας.
Δεν αποστέλλονται πουθενά τα προσωπικά σας δεδομένα.

Με το πάτημα του κουμπιού 'ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ' η εφαρμογή δεν στέλνει το μήνυμα στο 13033 αλλά σας
μεταφέρει στην εφαρμογή μηνυμάτων του κινητού σας με συμπληρωμένα όλα τα πεδία. Φυσικά και πρέπει να
έχετε πληκτρολογήση σωστά τα στοιχεία σας έτσι ώστε να είναι σωστή και η δομή του μηνύματος.

Περισσότερες πληροφορίες σχετικά με τους τρόπους μετακίνησης και οδηγίες να βρείτε στο`

class AppInfoScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.infoScreen}>
                <Text style={styles.infoTextStyle}>
                    {info} <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://forma.gov.gr/')}>
                        forma.gov.gr
                </Text>
                </Text>
                <Text></Text>
                <Text style={styles.infoTextStyle}>
                    Η εφαρμογή είναι ανοικτού κώδικά. Μπορείτε να τη βρείτε εδώ: <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('https://github.com/almpertos/smsTo13033')}>
                        github.com/almpertos/smsTo13033
                </Text>
                </Text>
                <Text></Text>
                <Text style={styles.infoTextStyle}>Προγραμματιστής εφαρμογής: <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://www.linkedin.com/feed/')}>
                    Κεσισεφίδης Αλμπέρτος
                    </Text>
                </Text>
            </ScrollView>
        )
    }
}

export default AppInfoScreen;

