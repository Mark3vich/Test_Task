IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230501154406_Initial')
BEGIN
    CREATE TABLE [Users] (
        [id] int NOT NULL IDENTITY,
        [name] nvarchar(max) NOT NULL,
        [email] nvarchar(max) NOT NULL,
        [telephone] nvarchar(max) NOT NULL,
        [message_topics] nvarchar(max) NOT NULL,
        [message] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Users] PRIMARY KEY ([id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230501154406_Initial')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230501154406_Initial', N'7.0.5');
END;
GO

COMMIT;
GO

