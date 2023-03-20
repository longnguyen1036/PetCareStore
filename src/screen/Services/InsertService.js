
const InsertService = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hearderIcon}>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.iconAdd}>
      </TouchableOpacity>

      <View style={styles.conTent}>
        <View>
        </View>
        <View style={styles.textInput}>
        </View>

        <View>
        </View>
        <View style={styles.textInput}>
        </View>

        <View>
        </View>

        <SelectDropdown
        />

        <View>
        </View>

        <SelectDropdown
        />

      </View>
      <View style={styles.viewPressInsert}>
        <TouchableOpacity style={styles.PressInsert}>
        </TouchableOpacity>
      </View>

    </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: '2%',
    marginVertical: '2%',
    height: 40,
    width: 40,
    backgroundColor: '#d3d3d3',
    marginHorizontal: '6%',
    marginVertical: '2%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: '5%',
    height: '60%',
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',

    backgroundColor: '#18A2E1',
    width: '50%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
