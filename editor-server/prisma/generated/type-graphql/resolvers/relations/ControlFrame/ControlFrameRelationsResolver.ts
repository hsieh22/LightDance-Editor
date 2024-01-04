import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ControlData } from "../../../models/ControlData";
import { ControlFrame } from "../../../models/ControlFrame";
import { EditingControlFrame } from "../../../models/EditingControlFrame";
import { ControlFrameControlDatasArgs } from "./args/ControlFrameControlDatasArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ControlFrame)
export class ControlFrameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => EditingControlFrame, {
    nullable: true
  })
  async editing(@TypeGraphQL.Root() controlFrame: ControlFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EditingControlFrame | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).controlFrame.findUnique({
      where: {
        id: controlFrame.id,
      },
    }).editing({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ControlData], {
    nullable: false
  })
  async controlDatas(@TypeGraphQL.Root() controlFrame: ControlFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ControlFrameControlDatasArgs): Promise<ControlData[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).controlFrame.findUnique({
      where: {
        id: controlFrame.id,
      },
    }).controlDatas({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
