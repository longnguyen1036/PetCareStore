import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';
import PieChart from 'react-native-pie-chart';
import {ScrollView} from 'react-native-gesture-handler';
import Block from '../../components/Block';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';

const Chart = () => {
  const widthAndHeight = 250;
  // const series = [10, 20, 70,];
  const [series, setSeries] = useState([1, 1, 1]);
  const [sum, setSum] = useState(0);
  const sliceColor = ['#F44336', '#2196F3', 'yellow'];
  const [loading, setLoading] = useState(false);

  const getChart = async () => {
    setLoading(true);
    try {
      const res = await productApi.getChart();
      setSeries([
        res.data.data.qtyBillPet,
        res.data.data.qtyBillProduct,
        res.data.data.qtyBillService,
      ]);
      const total = res.data.data.sumPricePet + res.data.data.sumPriceProduct;
      setSum(total);
      setLoading(false);
    } catch (error) {
      console.log('error:', error);
      setLoading(false);
    }
  };

  console.log(series);

  useEffect(() => {
    getChart();
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'red'} />
      ) : (
        <Block>
          <View style={styles.container}>
            <Text style={styles.title}>Thống kê Bill</Text>

            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
            />
          </View>

          <Block row marginTop={30} justifyCenter alignCenter>
            <Block
              width={50}
              height={50}
              radius={25}
              backgroundColor={'#2196F3'}></Block>
            <Text style={{marginLeft: '10%'}}>Sản phẩm: {series[0]}</Text>
          </Block>
          <Block row marginTop={30} justifyCenter alignCenter>
            <Block
              width={50}
              height={50}
              radius={25}
              backgroundColor={'#F44336'}></Block>
            <Text style={{marginLeft: '10%'}}>Thú cưng: {series[1]}</Text>
          </Block>
          <Block row marginTop={30} justifyCenter alignCenter>
            <Block
              width={50}
              height={50}
              radius={25}
              backgroundColor={'yellow'}></Block>
            <Text style={{marginLeft: '10%'}}>Dịch vụ: {series[2]}</Text>
          </Block>
          <Block alignCenter marginTop={15}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tổng tiền: {formatMoney(sum)}</Text>
          </Block>
        </Block>
      )}
    </ScrollView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
