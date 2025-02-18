export interface Migration {
  up(
      queryInterface: import('sequelize').QueryInterface,
      Sequelize: typeof import('sequelize')
  ): Promise<void>;
  down(
      queryInterface: import('sequelize').QueryInterface,
      Sequelize: typeof import('sequelize')
  ): Promise<void>;
}

export interface MigrationV2 {
  up({ context: queryInterface }: { context: import('sequelize').QueryInterface }): Promise<void>;
  down({ context: queryInterface }: { context: import('sequelize').QueryInterface }): Promise<void>;
}
