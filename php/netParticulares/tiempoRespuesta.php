<?php
include("../conexion_e2e_process.php");

function busqueda($CANAL,$FECHA_QUERY){

  $resultado = mysql_query("SELECT  DATE_FORMAT(fecha, '%d/%m/%y-%k')as fecha,
                                    Tiempo_respuesta
                            FROM    seguimiento_cx_canal
                            WHERE   canal like '".$CANAL."'
                            AND     fecha > DATE_SUB('".$FECHA_QUERY."', INTERVAL 24 HOUR)
                            AND     fecha <= '".$FECHA_QUERY."'");

  return $resultado;

}

$category = array();
$series1 = array();
$series2 = array();
$series3 = array();
$series4 = array();
$series5 = array();
$series6 = array();

$hoy = date("Y-m-d H", strtotime('-1 hour'));
$semana_pasada = date("Y-m-d H", strtotime('-169 hour'));

$particularesHoy = busqueda('%particulares%',$hoy);
$globalHoy = busqueda('%global%',$hoy);
$KQOFHoy = busqueda('%KQOF%',$hoy);

$particularesPasada = busqueda('%Particulares%',$semana_pasada);
$globalPasada = busqueda('%global%',$semana_pasada);
$KQOFPasada = busqueda('%KQOF%',$semana_pasada);

$category['name'] = 'fecha';

while($r1 = mysql_fetch_array($particularesPasada)) {
      $series1['data'][] = $r1['Tiempo_respuesta'];
    }
while($r2 = mysql_fetch_array($globalPasada)) {
      $series2['data'][] = $r2['Tiempo_respuesta'];
    }
while($r3 = mysql_fetch_array($KQOFPasada)) {
      $series3['data'][] = $r3['Tiempo_respuesta'];
    }

while($r4 = mysql_fetch_array($particularesHoy)) {
      $category['data'][] = $r4['fecha'];
      $series4['data'][] = $r4['Tiempo_respuesta'];
    }
while($r5 = mysql_fetch_array($globalHoy)) {
      $series5['data'][] = $r5['Tiempo_respuesta'];
    }
while($r6 = mysql_fetch_array($KQOFHoy)) {
      $series6['data'][] = $r6['Tiempo_respuesta'];
    }

$datos = array();
array_push($datos,$category);
array_push($datos,$series1);
array_push($datos,$series2);
array_push($datos,$series3);
array_push($datos,$series4);
array_push($datos,$series5);
array_push($datos,$series6);

print json_encode($datos, JSON_NUMERIC_CHECK);

mysql_close($conexion);

?>
