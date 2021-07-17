create table blog_user(
  article_id bigint(20) UNSIGNED not null primary key auto_increment comment "文章id",
  name varchar(50) character set utf8mb4 comment "",
  created_time datetime not null default now() comment "创建时间",
  updated_time datetime not null default now() comment "修改时间",
  deleted tinyint not null default 1 comment "逻辑删除 0正常数据 1删除数据"
)engine=innodb charset=utf8 comment "用户表";

create table config(
  id bigint(20) UNSIGNED not null primary key auto_increment comment "主键",
  name varchar(50) character set utf8mb4 comment "配置名称",
  value varchar(255) character set utf8mb4 comment "配置内容"
)engine=innodb charset=utf8 comment "配置表";

create table categroy(
  id bigint(20) UNSIGNED not null primary key auto_increment comment "分类Id",
  name varchar(50) character set utf8mb4 comment "分类名称"
)engine=innodb charset=utf8 comment "文章分类表";

CREATE TABLE tag (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tag_id int(11) NULL COMMENT '',
  tag_name varchar(255) NULL COMMENT '标签名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB charset=utf8 COMMENT '博客-标签表';

create table article(
  id bigint(20) UNSIGNED not null primary key auto_increment comment "文章id",
  title varchar(100) character set utf8mb4 comment "文章标题",
  summery varchar(255) character set utf8mb4 comment "摘要",
  connent longtext(5000) character set utf8mb4 comment "摘要",
  categroy_id bigint(20) comment "分类Id",
  created_time datetime not null default now() comment "创建时间",
  updated_time datetime not null default now() comment "修改时间",
  deleted tinyint not null default 1 comment "逻辑删除 0正常数据 1删除数据"
)engine=innodb charset=utf8 comment "文章表";

CREATE TABLE article_tag (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tag_id int(11)  NOT NULL COMMENT '',
  article_id bigint(20) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB charset=utf8 COMMENT '文章-标签关联表';