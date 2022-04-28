<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Painel Atendimentos</title>
  <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
</head>
<body>
  <?php
    $result = file_get_contents("http://192.168.5.248:3001/atendimentos");
    $atendimento = json_decode($result);
  ?>
  
  <div class="container">
    <table class="table">
    <h1 class ="d-flex justify-content-center">Atendimentos</h1>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Pet</th>
          <th>Serviço</th>
          <th>Status</th>
          <th>Observações</th>
          <th>Agendado p/</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($atendimento as $atendimentos): ?>
          <tr>
            <td><?php echo $atendimentos->id ; ?></td>
            <td><?php echo $atendimentos->cliente ; ?></td>
            <td><?php echo $atendimentos->pet; ?></td>
            <td><?php echo $atendimentos->servico; ?></td>
            <td><?php echo $atendimentos->status; ?></td>
            <td><?php echo $atendimentos->observacoes; ?></td>
            <td><?php echo $atendimentos->data; ?></td>
            <td><?php echo $atendimentos->dataCriacao; ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
    <input type="text" inspellcheck="true">
  </div>
</body>
</html>