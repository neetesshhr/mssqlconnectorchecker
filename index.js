const sql = require('mssql');

// Connection configuration
const config = {
  server: '3.145.47.245\\MSSQLSERVER01',
  user: 'testuser01',
  port: 1433,
  password: 'test123',
  database: 'testdb',
   // Disable SSL encryption
  trustServerCertificate: true,
};

// Connect to the LocalDB instance
sql.connect(config)
  .then(pool => {
    // Query example
    return pool.request().query("SELECT TOP (1000) [Id],[Title],[Name],[ExternalUrl],[Type],[UseCase],[IsMediaUploadedSuccessfully],[ResearchId],[LaboratoryId],[EquipmentId],[ExpenseId],[DraftId],[CreatorUserId],[DataId],[AppTaskId],[DiscussionHistoryId],[MediaSize],[SubscriptionId],[MeetingNoteId],[UserId],[CreatedAt],[DeletedAt],[UpdatedAt]FROM [Radvix_Dev_DB].[dbo].[Medias]");
  })
  .then(result => {
    console.log(result.recordset);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    sql.close();
  });
